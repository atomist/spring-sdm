/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Configuration } from "@atomist/automation-client";
import { configureDashboardNotifications } from "@atomist/automation-client-ext-dashboard";
import { configureLogzio } from "@atomist/automation-client-ext-logzio";
import { configureSdm } from "@atomist/sdm-core";
import { springGeneratorMachine } from "./machine/springGeneratorMachine";

export const configuration: Configuration = {
    postProcessors: [
        configureLogzio,
        configureDashboardNotifications,
        configureSdm(springGeneratorMachine),
    ],
};
