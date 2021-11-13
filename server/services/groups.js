import { MCreateGroup, MGetGroup, MGetGroupById, MGetProfile, MGetLimit, MGetByIdAndConversation, MGetSumNotification, MGetNameAndMember } from './../models/groups.js';

export const SCreateGroup = async (newGroup) => {
    try {
        const newGroupChat = await MCreateGroup(newGroup);
                    
        console.log(newGroupChat);
    } catch (error) {
        console.log(error);
    }
}

export const SGetGroup = async () => {
    try{
        const getGroupChat = await MGetGroup();

        return getGroupChat;
    }   catch (error){
        console.log(error);
    }
}

export const SGetGroupById = async (id) => {
    try {
        const getGroupChatById = await MGetGroupById(id);

        return getGroupChatById;
    } catch (error) {
        console.log(error);
    }
}

export const SGetNameAndMember = async (id) => {
    try {
        const getNameAndMember = await MGetNameAndMember(id);

        return getNameAndMember;
    } catch (error) {
        console.log(error);
    }
}

export const SGetProfile = async (id) => {
    try {
        const getProfile = await MGetProfile(id);

        return getProfile;
    } catch (error) {
        console.log(error);
    }
}

export const SGetLimit = async (id, limit) => {
    try {
        const getLimit = await MGetLimit(id, limit);

        return getLimit;
    } catch (error) {
        console.log(error);
    }
}

export const SGetByIdAndConversation = async (id, conversation) => {
    try {
        const getByIdAndConversation = await MGetByIdAndConversation(id, conversation);

        return getByIdAndConversation;
    } catch (error) {
        console.log(error);
    }
}

export const SGetSumNotification = async (id) =>{
    try {
        const getSumNotification = await MGetSumNotification(id);

        return getSumNotification;
    } catch (error) {
        console.log(error);
    }
}