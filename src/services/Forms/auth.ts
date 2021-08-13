


export interface RegisterForm {
	username?: string;
	email?: string;
	password?: string;
};


export interface LoginForm {
	email?: string;
	password?: string;
};

export interface SignUpResult{
	$id?: number;
	token?: string|null;
	refreshToken?: string|null;
	success: Boolean;
	errors?: Error | null;
};

interface Error {
	$id?: number;
	$values?: [];
};