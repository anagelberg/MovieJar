import './AddJarModal.scss';
import Modal from '../Modal/Modal';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import Button from '../Button/Button';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';

function AddJarModal({ show, closeHandler, currentUser }) {
    const [jarName, setJarName] = useState('');

    const addJar = (e) => {
        if ((e?.key === 'Enter' || !e) && jarName.length > 0) {
            axios.post(`${process.env.REACT_APP_BASE_URL}/jar`, {
                name: jarName,
                creatorId: currentUser
            }).then(() => {
                setJarName("")
                closeHandler();
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <Modal
            show={show}
            headerContent={() => {
                //ToDO; refactor closeIcon into component
                return <CloseIcon className="del-modal__close" onClick={closeHandler} />
            }}
            bodyContent={() => {
                return (
                    <label class='add-modal__label'>Name your jar
                        <input
                            autoFocus={true}
                            placeholder='Enter Jar Name'
                            value={jarName}
                            onChange={(e) => setJarName(e.target.value)}
                            className="sidebar__add-new-input"
                            onKeyDown={(e) => {
                                addJar(e)
                            }} >
                        </input>
                    </label>
                )
            }}
            footerContent={() => {
                return (
                    <>
                        <Button
                            text="Cancel"
                            modifier="--reverse"
                            onClick={() => closeHandler()}
                        />

                        <Button
                            text="Add"
                            onClick={() => addJar()}
                        />

                    </>
                )
            }}
        />
    )
}

export default AddJarModal;