import React from 'react';
import ReactStars from 'react-stars';

class FormComment extends React.Component {
  render() {
    const { onChange, onClick, comment, starsChange } = this.props;
    return (
      <form>
        <label>Deixe sua avaliação sobre esse produto:</label>
        <ReactStars
          count={5}
          onChange={starsChange}
          size={24}
          color2={'#ffd700'}
        />
        <label>Deixe seu comentário:
          <textarea type="text" value={comment} onChange={onChange} data-testid="product-detail-evaluation" />
        </label>
        <button type="button" onClick={onClick}>Adicionar Comentário</button>
      </form>
    )
  }
}

export default FormComment;