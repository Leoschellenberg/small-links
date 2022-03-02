
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some( link => link.id === newLink.id);

    if(hasLink){
        console.log('Esse link ja existe na sua lista')
        return;
    }

    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo com sucesso');
}

export async function deleteLink(links, id){
    let myLinks = links.filter(item => {
        return (item.id !== id)
    })
    localStorage.setItem('@chaveEncurtaLink', JSON.stringify(myLinks));
    console.log('LINK DELETADO COM SUCESSO');

    return myLinks;
}