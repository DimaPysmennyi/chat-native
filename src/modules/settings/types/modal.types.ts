export interface IDetailsModalProps {
	isVisible: boolean;
	onClose: () => void;
}

export interface IDetailsForm{
    firstname?: string,
    lastname?: string
    username?: string,
}