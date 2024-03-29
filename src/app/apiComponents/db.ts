const {user_name,password}= process.env;
export const connectionStr = `mongodb+srv://${user_name}:${password}@cluster0.mssbdkm.mongodb.net/ecommerce_orders?retryWrites=true&w=majority&appName=Cluster0`
export const access_key =  process.env.access_key;
export const secret_access_key =  process.env.secret_access_key;