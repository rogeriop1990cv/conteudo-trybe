import React from 'react';
import ButtonImg from './ButtonImg';
import InputNameButton from './InputNameButton';
import './DogPhoto.css'

class DogPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      nomeDog: '',
      loading: true,
      nameDogImage: [],
    };
  }

  handleChangeButtonImg = () => {
    this.fetchImg()
  };

  handleChangeInputNameButtonh = (value) => {
    this.setState(({image, nameDogImage}) => {
      return { 
        nomeDog: value,
        nameDogImage: [...nameDogImage, {nome: value, url: image}]
       };
    }, () => this.saveStorage())
  };

  saveStorage = () => {
    const { nameDogImage } = this.state;
    const prevLocalStore = JSON.parse(localStorage.getItem('nameDogImage')) || []
    const last = [...nameDogImage].pop() // deleta o ultimo e retorna ele.
    // const last  = [...nameDogImage].pop() // Pega o a ultima url de uma lista.
    localStorage.setItem('nameDogImage', JSON.stringify([...prevLocalStore, last]))
  }
  
  fetchImg = async () => {
    this.setState(() => ({ loading: false }))
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await request.json();
    this.setState(() => {
      return { image: data.message, loading: true };
    })
  };

  breed = () => {
    const { image } = this.state;
    const breed = image.split('/')[4]
    alert(`A raça do doguinho é ${breed}`)
  }


  
  ImaTag = () => {
    return (
      <div>
        <img src={this.state.image}
          alt="Imagem de cachorro"
          className="image-photo-dog"
          onLoad={this.breed}/>
      </div>
    )
  }


  componentDidMount() {
    const prevLocalStore = JSON.parse(localStorage.getItem('nameDogImage'))
    const { url } = [...prevLocalStore].pop()
    if(!prevLocalStore){
      return this.fetchImg();
    }
    this.setState(()=> ({image: url}))
  }

  

  shouldComponentUpdate(_, { image }){
    if(image.includes('terrier')) return false;
    return true;
  }
  render() {
    const { loading } = this.state;
    return (
      <section>
        {loading ? this.ImaTag() : <p>Loading...</p>}<br />
        <ButtonImg onClick={this.handleChangeButtonImg} /><br />
        <InputNameButton onClick={this.handleChangeInputNameButtonh} />
      </section>
    );
  }
}

export default DogPhoto;
