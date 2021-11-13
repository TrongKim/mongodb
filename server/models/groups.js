import { client } from './../index.js';
import mongoose from 'mongoose';
export const MCreateGroup = async (newGroup) => {
    const collection = client.db('test').collection('group');

    const res = await collection.insertOne(newGroup);

    return res.ops[0];
}

export const MGetGroup = async () => {
    const collection = client.db('test').collection('group');

    const res = await collection.aggregate().toArray();

    return res;
}

export const MGetGroupById = async (id) => {
    const collection = client.db('test').collection('group');

    const _id = parseInt(id);

    const res = await collection.aggregate([{
        $unwind: "$members"
    },
    {
        $match: {"members.member_id": _id}
    }   
]).toArray();
    return res;
}

export const MGetNameAndMember = async (id) => {
    const collection = client.db('test').collection('group');

    const _id = parseInt(id);

    const res = await collection.aggregate([
        {
            $match: {"members.member_id": _id}
        },
        {
            $project: {"name": 1, "members.full_name": 1}
        }
    ]).toArray();

    return res;
}

export const MGetProfile = async (id) => {
    const collection = client.db('test').collection('group');

    const _id = parseInt(id);

    const res = await collection.aggregate([
        {
            $match: { "members.member_id": _id }
        },
        {
            $project: { "members": 0 }
        }
    ]).toArray();

    return res;
}

export const MGetLimit = async(id, limit) => {
    const collection = client.db('test').collection('group');

    const _id = parseInt(id);
    const _limit = parseInt(limit);

    const res = await collection.aggregate([
        {
            $match: { "members.member_id": _id }
        }, 
        {
            $project: { "name": 1 }
        },
        {
            $limit: _limit
        }
    ]).toArray();

    return res;
}

export const MGetByIdAndConversation = async(id, conversation) => {
    const collection = client.db('test').collection('group');

    const _id = parseInt(id);
    const _conversation = parseInt(conversation);
    const res = await collection.aggregate([
        {
            $match: { $and: [{"members.member_id": _id}, {conversation_type: _conversation}]}
        },
        {
            $project: { "members": 0 }
        }
    ]).toArray();
    console.log(res);
    return res;
}

export const MGetSumNotification = async(id) => {
    const collection = client.db('test').collection('group');

    const _id = parseInt(id);

    const res = await collection.aggregate([
        {
            $unwind: "$members"
        },
        {
            $match: { "members.member_id": _id }
        },
        {
            $group: {
                _id: "$members.number",
                count: { $sum: "$members.number" }
            }
        }
    ]).toArray();

    return res;
}