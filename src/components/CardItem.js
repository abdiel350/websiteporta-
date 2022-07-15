import React, { Fragment, useState } from 'react';
import { Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  modal: {

    position: 'center',
    width: 100,
    height: 100,
    backgroundColor: (98, 155, 191),
    //backgroundColor:'white',
    //border:'2px solid #000',
    baxShadow: theme.shadows[5],
    padding: "16px 32px 24px",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  container: {
    textAlign: 'center'
  }

}))

function CardItem(props) {

  const styles = useStyles();

  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);

  }

  const body = (
    <Fragment>

      <div align="right">
        <button onClick={() => abrirCerrarModal()}> <CloseIcon /> </button>

      </div>

      <div align="center">
        < img
          src={props.src}
          alt={props.src}
        />
        <p>{props.text}</p>
        <p>{props.Tecnologias}.</p>
      </div>
    </Fragment>
  )


  return (
    <>
      <li className='cards__item'>

        <Link className='cards__item__link' to={props.path}>

          <figure className='cards__item__pic-wrap'>

            <img
              className='cards__item__img'
              alt={props.src}
              src={props.src}
              onClick={() => abrirCerrarModal()}
            />

            <div className={styles.container}>
              <Modal
                open={modal}
                onClose={abrirCerrarModal}>
                {body}
              </Modal>
            </div>

          </figure>
          <div className='cards__item__info'>

            <h5 className='cards__item__text'>{props.text}</h5>

          </div>
        </Link>

      </li>

      <a className="letraslink"
        href={props.pagina}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Proyecto
      </a>

    </>
  );

}
export default CardItem;
