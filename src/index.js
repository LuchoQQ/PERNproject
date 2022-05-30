import { sequelize } from './database/database.js'
import app from './app.js'
const port = 3005;



async function main() {
    try {
        await sequelize.sync({ force: false });
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    } catch (error) {
        console.error('Error:', error)
    }
}

main()