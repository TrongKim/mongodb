import { SCreateGroup, SGetGroup, SGetGroupById, SGetNameAndMember, SGetProfile, SGetLimit, SGetByIdAndConversation, SGetSumNotification } from './../services/groups.js';

export const createGroup = async (req, res) => {
    const { data } = req.body;
    try {
        const dataRes = SCreateGroup(data);

        res.status(201).send(dataRes);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getGroup = async (req, res) => {
    try {
        const dataRes = await SGetGroup();

        res.status(200).json({status: 200, message: 'OK', data: dataRes});
    } catch (error) {
        res.status(204).json({ message: error.message });
    }
}

export const getGroupById = async (req, res) => {
    const { _id } = req.params;
    try {
        const dataRes = await SGetGroupById(_id);

        res.status(200).json({status: 200, message: 'OK', data: dataRes});
    } catch (error) {
        res.status(204).json({ message: error.message });
    }
}

export const getNameAndMember = async (req, res) => {
    const { _id } = req.params;
    try {
        const dataRes = await SGetNameAndMember(_id);

        res.status(200).json({status: 200, message: 'OK', data: dataRes});
    } catch (error) {
        res.status(204).json({ message: error.message });
    }
}

export const getProfile = async (req, res) => {
    const { _id } = req.params;
    try{
        const dataRes = await SGetProfile(_id);

        res.status(200).json({status: 200, message: 'OK', data: dataRes});
    } catch (error) {
        res.status(204).json({ message: error.message });
    }
}

export const getLimit = async(req, res) => {
    const { _id } = req.params;
    const { limit } = req.params;
    try {
        const dataRes = await SGetLimit(_id, limit);

        res.status(200).json({status: 200, message: 'OK', data: dataRes});
    } catch (error) {
        res.status(204).json({ message: error.message });
    }
}

export const getByIdAndConversation = async(req, res) => {
    const { _id } = req.params;
    const { conversation } = req.params;

    try {
        const dataRes = await SGetByIdAndConversation(_id, conversation);

        res.status(200).json({status: 200, message: 'OK', data: dataRes});
    } catch (error) {
        res.status(204).json({ message: error.message });
    }
}

export const getSumNotification = async(req, res) => {
    const { _id } = req.params;
    
    try {
        const dataRes = await SGetSumNotification(_id);

        res.status(200).json({status: 200, message: 'OK', data: dataRes});
    } catch (error) {
        res.status(204).json({ message: error.message });
    }
}