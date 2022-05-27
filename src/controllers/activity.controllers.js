import { Activity } from '../models/Activity.js'

export const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll()
        if (activities.length === 0) {
            return res.status(404).send('No activities found');
        } else {
            res.send(activities);
        }
        
    } catch (error) {
        console.log(error)
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
        console.log(error)
    }
}

export const createActivity = async (req, res) => {
    try {
        const { transaction, description, from, to, amount, user_id} = req.body;
        const newActivity = await Activity.create({
            id: Math.floor(Math.random() * 1000000000),
            transaction,
            description,
            from,
            to,
            amount,
            user_id
        });
        res.send(newActivity);
    } catch (error) {
        console.log(error)
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
        console.log(error)
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
        console.log(error)
    }
}