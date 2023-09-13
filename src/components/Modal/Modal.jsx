// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import css from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       console.log('треба закрити модалку по еск');
//       this.props.onClose();
//     }
//     console.log(e.code);
//   };

//   render() {
//     return createPortal(
//       <div className={css.backdrop} onClick={this.handleBackdropClick}>
//         <div className={css.content}>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }
