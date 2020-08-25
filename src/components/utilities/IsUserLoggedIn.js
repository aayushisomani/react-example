export function isUserLoggedIn(){
    let myStorage = window.sessionStorage;

    // myStorage.setItem('user', this.state.email);
    console.log(myStorage.getItem('user'));
    if (myStorage.getItem('user') === undefined || myStorage.getItem('user') === null) {
        console.log("should not render")
        return false;
    }

    return true;
}