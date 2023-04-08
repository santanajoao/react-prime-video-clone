import React from 'react';
import PropTypes from 'prop-types';

// O objetivo desse componente é conseguir adicionar um texto auxiliar para
// leitores de tela em botões que não contém texto, botões com ícone ou imagem
// por exemplo

export default function TextLessButton({
  children,
  className,
  onClick,
  textTip,
  title,
}) {
  return (
    <button type="button" title={title} onClick={onClick} className={className}>
      <span className="screen-readers-only">{textTip}</span>
      {children}
    </button>
  );
}

TextLessButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  textTip: PropTypes.string.isRequired,
  title: PropTypes.string,
};

TextLessButton.defaultProps = {
  className: null,
  onClick: null,
  title: null,
};
