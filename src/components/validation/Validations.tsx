export default function Validation(data: any) {
    let status: Boolean = true;
    let errorMessages = {}
    if ('username' in data &&  data?.username?.length === 0 ) {
      Object.assign(errorMessages,{username: "username is required"})
      status = false;
    }
    if ('password' in data && data?.password.length === 0 ) {
        Object.assign(errorMessages,{password: "password is required"})
        status = false;
    }
    // if ('name' in data && data?.name.length === 0 ) {
    //     Object.assign(errorMessages,{name: "name is name"})
    //     status = false;
    // }if ('org' in data &&  data?.org.length === 0 ) {
    //     Object.assign(errorMessages,{org: "org is required"})
    //     status = false;
    // }if ('role' in data && data?.role.length === 0 ) {
    //     Object.assign(errorMessages,{role: "role is required"})
    //     status = false;
    // }
    // if ('db' in data && data?.db.length === 0 ) {
    //     Object.assign(errorMessages,{db: "db is required"})
    //     status = false;
    // }
    return errorMessages;
}
