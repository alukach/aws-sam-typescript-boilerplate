# AWS SAM NodeJS + TypeScript Boilerplate

This is a quick of example my setup for build AWS SAM applications in TypeScript.

_Note that I'm not a build-config wizard, this is a configuration that worked for me and that is continually evolving. If you see any mistakes or room for improvement, please create an Issue or Pull Request. **Feedback very welcome!**_

## Features

* Multiple entries: Each function handler is built into its own entry file. This aims to keep each function as small and discrete as possible, only packaging the logic needed for that particular function. These entry files are determined by searching the `template.yaml` for Resources with a Type of `AWS::Serverless::Function`.
* Uglify output during production builds.
* Tests.

## Commands

* `start`: Watch source code, build on changes
* `build`: Build source code
* `test`: Run tests
* `test -- --watch`: Watch source code, run tests on changes
* `package`: Run `sam package` with relevant `template-file` and `s3-bucket` values
* `deploy`: Run `sam deploy` with relevant `template-file` and `stack-name` values
* `clean`: Wipe-out build directory

## Examples

### Executing locally

```sh
▶ echo '{"name": "Doug"}' | sam local invoke Hello
2018-05-28 10:35:18 Reading invoke payload from stdin (you can also pass it from file with --event)
2018-05-28 10:35:18 Invoking hello.default (nodejs8.10)
2018-05-28 10:35:18 Found credentials in shared credentials file: ~/.aws/credentials

Fetching lambci/lambda:nodejs8.10 Docker container image......
2018-05-28 10:35:20 Mounting /Users/alukach/Projects/aws-sam-example/dist as /var/task:ro inside runtime container
START RequestId: 03c81c3a-791a-15de-7225-bcdccc01d273 Version: $LATEST
END RequestId: 03c81c3a-791a-15de-7225-bcdccc01d273
REPORT RequestId: 03c81c3a-791a-15de-7225-bcdccc01d273  Duration: 8.71 ms     Billed Duration: 100 ms  Memory Size: 128 MB     Max Memory Used: 32 MB

"Hello Doug"
```

## Resources

It is strongly recommended that you are familiar with the following:

* [AWS Serverless Application Model](https://github.com/awslabs/serverless-application-model)
* [AWS SAM CLI](https://github.com/awslabs/aws-sam-cli)
