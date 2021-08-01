import React from 'react';
import ButtonImg from './ButtonImg';
import InputNameButton from './InputNameButton';

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

  handleChangeInputNameButtonh = () => {
    console.log('teste');
  };


  fetchImg = async () => {
    // const { imagemAtual } = this.props;
    this.setState((loading) => ({loading: false}))
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await request.json();
    this.setState(({image, loading}) => {
      return { image: data.message, loading: true };
    })
  };

  ImaTag = () => {
    return (
    <img src={this.state.image}
      alt="Imagem de cachorro"
      className="image-photo-dog"
      style={{ width: "200px" }} />
    )
  }


componentDidMount() {
  this.fetchImg();
}

render() {
  const { loading } = this.state;
  return (
    <section>
      {loading ? this.ImaTag() : <p>Loading...</p>}<br />
      <ButtonImg onClick={this.handleChangeButtonImg} />
      <InputNameButton />
    </section>
  );
}
}

export default DogPhoto;
