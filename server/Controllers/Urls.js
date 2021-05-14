import mongoose from 'mongoose'
import urlsModel from "./../Model/urlsModel.js";

export const getLinks = async (req,res) =>{
    try {
        const links = await urlsModel.find()
        res.status(200).json(links)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const postLink = async (req,res) =>{
    const link=req.body
    const randomPath = Math.random().toString(36).substr(2,7)
    const newLink = {
        creator : req.userID,
        //dispatch(addLink({longURL:url})) : body{longURL:url}
        longURL:link.longURL,
        shortURL: randomPath
    }
    try {
        const newURL = await urlsModel.create(newLink)
        res.status(200).json(newURL)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteLink = async (req,res) =>{
    let {id} = req.params
    try {
        await urlsModel.findByIdAndDelete(id)
        res.status(200).json({message : 'Deleted Successfully.'})
    } catch (error) {
        console.log(error)
    }
}