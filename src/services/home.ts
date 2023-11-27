import { COOKIE } from "../utils";
import api from "./request";

export function addTask(data: any): Promise<any> {
  return api
    .post("/tasks", data, {
      headers: {
        authorization: `Bearer ${COOKIE.get("token")}`,
      },
    })
    .then((response) => response.data);
}

export function getTask(): Promise<any> {
  return api
    .get("/tasks", {
      headers: {
        authorization: `Bearer ${COOKIE.get("token")}`,
      },
    })
    .then((response) => response.data);
}

export function getTaskId(task_id: any): Promise<any> {
  return api
    .get("/tasks/" + task_id, {
      headers: {
        authorization: `Bearer ${COOKIE.get("token")}`,
      },
    })
    .then((response) => response.data);
}
