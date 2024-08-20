/** @format */

import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
	const payload = getPayloadClient({
		initOptions: {
			express: app,
			onInit: (cms) => {
				cms.logger.info(`Admin Url ${cms.getAdminURL()}`);
			},
		},
	});


  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(()=>{
    payload.logger.info(`Next.js started`)

    app.listen(PORT,async () => {
      payload.logger.info(`Next.js App Url ${process.env.NEXT_PUBLIC_SERVER_URL}`);
    })
  })

};

start();
