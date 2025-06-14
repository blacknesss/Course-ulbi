import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            <Suspense fallback = {<Loader/>}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
