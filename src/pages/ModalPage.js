import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick=()=>{
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <Button primary onClick={handleClose}>I Accept</Button>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important aggreement for you to accept</p>
        </ Modal> ;
    
    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal} 
            {/* if showModel is true, show model, else show nothing */}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique feugiat arcu. Duis diam lacus, dapibus quis ex vitae, efficitur sodales ex. Proin vitae feugiat risus. Suspendisse bibendum velit lectus. Duis bibendum hendrerit nisi, vitae rhoncus lorem elementum ut. Pellentesque ut ipsum at risus molestie pretium. Phasellus ut est ligula. Nulla metus velit, sollicitudin sed erat vitae, convallis malesuada augue. Duis ut sollicitudin nulla, eu dictum quam. Aliquam et quam elit. Nunc faucibus rutrum lorem, at eleifend diam rutrum a. Integer eget justo eleifend, convallis est consectetur, volutpat tortor. Donec vitae turpis ligula. Donec est mauris, laoreet ut sapien non, mollis vestibulum eros.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique feugiat arcu. Duis diam lacus, dapibus quis ex vitae, efficitur sodales ex. Proin vitae feugiat risus. Suspendisse bibendum velit lectus. Duis bibendum hendrerit nisi, vitae rhoncus lorem elementum ut. Pellentesque ut ipsum at risus molestie pretium. Phasellus ut est ligula. Nulla metus velit, sollicitudin sed erat vitae, convallis malesuada augue. Duis ut sollicitudin nulla, eu dictum quam. Aliquam et quam elit. Nunc faucibus rutrum lorem, at eleifend diam rutrum a. Integer eget justo eleifend, convallis est consectetur, volutpat tortor. Donec vitae turpis ligula. Donec est mauris, laoreet ut sapien non, mollis vestibulum eros.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique feugiat arcu. Duis diam lacus, dapibus quis ex vitae, efficitur sodales ex. Proin vitae feugiat risus. Suspendisse bibendum velit lectus. Duis bibendum hendrerit nisi, vitae rhoncus lorem elementum ut. Pellentesque ut ipsum at risus molestie pretium. Phasellus ut est ligula. Nulla metus velit, sollicitudin sed erat vitae, convallis malesuada augue. Duis ut sollicitudin nulla, eu dictum quam. Aliquam et quam elit. Nunc faucibus rutrum lorem, at eleifend diam rutrum a. Integer eget justo eleifend, convallis est consectetur, volutpat tortor. Donec vitae turpis ligula. Donec est mauris, laoreet ut sapien non, mollis vestibulum eros.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique feugiat arcu. Duis diam lacus, dapibus quis ex vitae, efficitur sodales ex. Proin vitae feugiat risus. Suspendisse bibendum velit lectus. Duis bibendum hendrerit nisi, vitae rhoncus lorem elementum ut. Pellentesque ut ipsum at risus molestie pretium. Phasellus ut est ligula. Nulla metus velit, sollicitudin sed erat vitae, convallis malesuada augue. Duis ut sollicitudin nulla, eu dictum quam. Aliquam et quam elit. Nunc faucibus rutrum lorem, at eleifend diam rutrum a. Integer eget justo eleifend, convallis est consectetur, volutpat tortor. Donec vitae turpis ligula. Donec est mauris, laoreet ut sapien non, mollis vestibulum eros.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique feugiat arcu. Duis diam lacus, dapibus quis ex vitae, efficitur sodales ex. Proin vitae feugiat risus. Suspendisse bibendum velit lectus. Duis bibendum hendrerit nisi, vitae rhoncus lorem elementum ut. Pellentesque ut ipsum at risus molestie pretium. Phasellus ut est ligula. Nulla metus velit, sollicitudin sed erat vitae, convallis malesuada augue. Duis ut sollicitudin nulla, eu dictum quam. Aliquam et quam elit. Nunc faucibus rutrum lorem, at eleifend diam rutrum a. Integer eget justo eleifend, convallis est consectetur, volutpat tortor. Donec vitae turpis ligula. Donec est mauris, laoreet ut sapien non, mollis vestibulum eros.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique feugiat arcu. Duis diam lacus, dapibus quis ex vitae, efficitur sodales ex. Proin vitae feugiat risus. Suspendisse bibendum velit lectus. Duis bibendum hendrerit nisi, vitae rhoncus lorem elementum ut. Pellentesque ut ipsum at risus molestie pretium. Phasellus ut est ligula. Nulla metus velit, sollicitudin sed erat vitae, convallis malesuada augue. Duis ut sollicitudin nulla, eu dictum quam. Aliquam et quam elit. Nunc faucibus rutrum lorem, at eleifend diam rutrum a. Integer eget justo eleifend, convallis est consectetur, volutpat tortor. Donec vitae turpis ligula. Donec est mauris, laoreet ut sapien non, mollis vestibulum eros.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique feugiat arcu. Duis diam lacus, dapibus quis ex vitae, efficitur sodales ex. Proin vitae feugiat risus. Suspendisse bibendum velit lectus. Duis bibendum hendrerit nisi, vitae rhoncus lorem elementum ut. Pellentesque ut ipsum at risus molestie pretium. Phasellus ut est ligula. Nulla metus velit, sollicitudin sed erat vitae, convallis malesuada augue. Duis ut sollicitudin nulla, eu dictum quam. Aliquam et quam elit. Nunc faucibus rutrum lorem, at eleifend diam rutrum a. Integer eget justo eleifend, convallis est consectetur, volutpat tortor. Donec vitae turpis ligula. Donec est mauris, laoreet ut sapien non, mollis vestibulum eros.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique feugiat arcu. Duis diam lacus, dapibus quis ex vitae, efficitur sodales ex. Proin vitae feugiat risus. Suspendisse bibendum velit lectus. Duis bibendum hendrerit nisi, vitae rhoncus lorem elementum ut. Pellentesque ut ipsum at risus molestie pretium. Phasellus ut est ligula. Nulla metus velit, sollicitudin sed erat vitae, convallis malesuada augue. Duis ut sollicitudin nulla, eu dictum quam. Aliquam et quam elit. Nunc faucibus rutrum lorem, at eleifend diam rutrum a. Integer eget justo eleifend, convallis est consectetur, volutpat tortor. Donec vitae turpis ligula. Donec est mauris, laoreet ut sapien non, mollis vestibulum eros.
            </p>
        </div>
    );    
};
export default ModalPage