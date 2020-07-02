interface IResponse{
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export  function signIn (): Promise<IResponse> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'jhasgdjhasgdjasgdkajsfguweygbdashcydgzsthgcksgscvx',
                user: {
                    name: 'Jonathas Gonçalves Picoli',
                    email: 'jonathas@gmail.com',
                },
            });
        }, 2000);
    });
}