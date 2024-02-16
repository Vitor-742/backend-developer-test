const verifyUUID = (uuid) => {
    // regex para UUID
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    // retorna true ou false
    return regexExp.test(uuid);
}

export default verifyUUID;