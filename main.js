"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.resolve)('./app/assets'));
    app.setBaseViewsDir((0, path_1.resolve)('./app/views'));
    app.setViewEngine('hbs');
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`???? Application is running on: http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map