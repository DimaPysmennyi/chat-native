export interface IDetailsModalProps {
	isVisible: boolean;
	onClose: () => void;
}

export interface IDetailsForm {
	firstname?: string;
	lastname?: string;
	username?: string;
}

export interface AlbumData {
	name: string;
	theme: string;
	year: string;
}

export interface IAlbumModalProps {
	isVisible: boolean;
	title: string;
	onClose: () => void;
	onSubmit: (data: AlbumData) => void;
}
