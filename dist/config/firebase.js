import admin from 'firebase-admin';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
try {
    const serviceAccount = require('../../firebase-account.json');
    console.log("📄 JSON cargado:", !!serviceAccount); // solo para debug
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        console.log("✅ Firebase Admin inicializado correctamente");
    }
}
catch (error) {
    console.error("❌ Error al cargar las credenciales de Firebase:", error);
    throw error; // ← agrega esto para que el error no se trague
}
export default admin;
//# sourceMappingURL=firebase.js.map