import axios from "axios";

const api = axios.create({
    baseURL: 'https://bp2022.herokuapp.com/'
})

interface FieldsProps{
    url: string
    dados: {}
    setDados: (token: string) => void
    configToken: { headers: { 'Authorization': string } }
}

type setDadosType = (params: string) => void

export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}