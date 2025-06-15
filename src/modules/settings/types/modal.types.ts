export interface IDetailsModalProps {
	isVisible: boolean;
	onClose: () => void;
}

export interface IDetailsForm {
	firstname?: string;
	lastname?: string;
	username?: string;
}

export interface InitialAlbumData {
	name: string;
	theme: string;
	year: string;
}

export interface IAlbumModalProps {
	isVisible: boolean;
	title: string;
	onClose: () => void;
	onSubmit: (data: InitialAlbumData) => void;
}
