import React from 'react';

// O objetivo desse componente é conseguir adicionar um texto auxiliar para leitores de tela mesmo em botões que não contém texto, botões com ícone ou imagem por exemplo

export default function TextLessButton({
  children,
  className,
  onClick,
  textTip,
}) {
  return (
    <button type="button" onClick={onClick} className={className}>
      <span className="screen-readers-only">{textTip}</span>
      {children}
    </button>
  );
}
