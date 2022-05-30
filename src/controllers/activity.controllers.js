import { Activity } from '../models/Activity.js'
import Joi from 'joi'

const schema = Joi.object().keys({
        id: Joi.string().required(),
        transaction: Joi.string().required(),
        description: Joi.string().required().max(15),
        from: Joi.string(),
        to: Joi.string(),
        amount: Joi.number().required(),
        category: Joi.string(),
        user_id: Joi.required(),
})


export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll()
        if (activities.length === 0) {
            return res.status(404).send('No activities found');
        } else {
            res.send(activities);
        }
        
    } catch (error) {
        throw new Error(error);
    }
}

export const getActivity = async (req, res) => {
    const { id } = req.params;
    try {
        const activity = await Activity.findByPk(id);
        if (!activity) {
            return res.status(404).send('Activity not found');
        } else {
            res.send(activity);
        }
    } catch (error) {
        throw new Error(error);
    }
}

export const createActivity = async (req, res) => {
    try {
        const { transaction, description, from, to, amount, category, user_id } = req.body;
        const newActivity = {
            id: Math.floor(100000 + Math.random() * 900000).toString(),
            transaction,
            description,
            from,
            to,
            amount,
            category,
            user_id
        }

        const result = schema.validate(newActivity);
        if (result.error) {
            return res.json({ error: result.error.details[0].message });
        } else {
            const activity = await Activity.create(newActivity);
            res.send(activity);
        }
    } catch (error) {
        res.json({
            status: "error",
            message: error.message,
        });
    }
}

export const updateActivity = async (req, res) => {
    const { id } = req.params;
    try {
        const activity = await Activity.findByPk(id);
        if (!activity) {
            return res.status(404).send('Activity not found');
        } else {
            const { transaction, description, from, to, amount} = req.body;
            const updatedActivity = await activity.update({
                transaction,
                description,
                from,
                to,
                amount,
            });
            res.send(updatedActivity);
        }
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteActivity = async (req, res) => {
    const { id } = req.params;
    try {
        const activity = await Activity.findByPk(id);
        if (!activity) {
            return res.status(404).send('Activity not found');
        } else {
            await activity.destroy();
            res.send(activity);
        }
    } catch (error) {
        throw new Error(error);
    }
}

