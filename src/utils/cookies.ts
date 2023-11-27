

const COOKIE = {

    set: function (cname: string, cvalue: string, exdays: number) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        document.cookie = `${cname}=${cvalue};${expires};path=/; ${import.meta.env.PROD ? "Secure" : ""}`
    },
    get: function (cname: string) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    check: function (val: string) {
        let user = this.get(val);
        if (user != "") {
            return val
        } else {
            throw "Cookie does not exist"
        }
    }
}
export default COOKIE