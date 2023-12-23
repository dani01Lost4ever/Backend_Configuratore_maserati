# API

swagger: '2.0'
info:
title: Library API
description: Api for managing library
version: 1.0.0
host: localhost:3000
basePath: /
schemes:

- http
  paths:
  /users/me:
  get:
  description: ''
  responses:
  '200':
  description: OK
  /users/:
  get:
  description: ''
  responses:
  '200':
  description: OK
  /register:
  post:
  description: ''
  responses:
  '200':
  description: OK
  '400':
  description: Bad Request
  /login:
  post:
  description: ''
  responses:
  '200':
  description: OK
  '401':
  description: Unauthorized
  /changePassword:
  patch:
  description: ''
  parameters: - name: body
  in: body
  schema:
  type: object
  properties:
  oldPassword:
  example: any
  newPassword:
  example: any
  responses:
  '200':
  description: OK
  '400':
  description: Bad Request
  '401':
  description: Unauthorized
  '404':
  description: Not Found
  /googleApi/search:
  get:
  description: ''
  parameters: - name: q
  in: query
  type: string
  responses:
  default:
  description: ''
