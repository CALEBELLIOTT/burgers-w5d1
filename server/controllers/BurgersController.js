import { response } from "express";
import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";


export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .post('', this.postBurger)
      .delete('/:numberOfPatties', this.deleteBurger)
  }

  async getBurgers(req, res, next) {
    try {
      let burgers = await burgersService.getBurgers()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async postBurger(req, res, next) {
    try {
      let response = await burgersService.postBurger(req.body)
      return res.send(response)
    } catch (error) {
      next(error)
    }
  }

  async deleteBurger(req, res, next) {
    try {
      logger.log(req.params.numberOfPatties)
      let response = await burgersService.deleteBurger(req.params.numberOfPatties)
      return res.send(response)
    } catch (error) {
      next(error)
    }
  }
}