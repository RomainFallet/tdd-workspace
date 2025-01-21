# TDD/Clean archi kata

As developers, we sometimes work on software that addresses technical needs. As everything is technical in this type of software, it's sometimes difficult to think about business rules and to bring out a core domain that abstracts from implementation and technical details.

This exercice is here to practice this point alongside TDD.

## Context

You are developing a new HTTP framework for the NodeJS ecosystem.

You first need to handle the HTTP routing part, which is the core feature of your framework.

Here are the specifications you need to work on:

- When receiving a new HTTP request, we need to match the url to one of the given user-defined HTTP routers
- When receiving a new HTTP request, if no HTTP matches the url, the system should return an error (404 error)
- Users can declare patterns in their HTTP routers definitions such as /users/:userId that the system should handle
- If the request uses an HTTP method that the matching user-defined HTTP router cannot handle, the system should return an error (405 error)
- If the handler defined in the HTTP router throws, the system should return an error (500 error)
- If the handler defined in the HTTP router returns no content, the system should return a 404 response
- If the handler defined in the HTTP router returns a content which is empty, the system should return a 204 response
- If the handler defined in the HTTP router returns a content, the system should return a 200 response

## Rules

- You first need to develop the core domain of the system using TDD
- No interaction with filesystem, network or other systems is allowed in the domain
- You can develop in the already created "http-routing" domain

## Tips

The monorepo uses npm workspaces feature. To start an NPM script for a specific module use the commands bellow:

### Build

```bash
npm run build --workspace ./libs/domain/http-routing
or
npm run build -w ./libs/domain/http-routing
```

### Lint

```bash
npm run lint --workspace ./libs/domain/http-routing
or
npm run lint -w ./libs/domain/http-routing
```

### Test

```bash
npm run test --workspace ./libs/domain/http-routing-test
or
npm run test -w ./libs/domain/http-routing-test
```

### Clean

```bash
npm run clean --workspace ./libs/domain/http-routing
or
npm run clean -w ./libs/domain/http-routing
```

You can also start a script for all modules using:

```bash
npm run build --workspaces --if-present
```
