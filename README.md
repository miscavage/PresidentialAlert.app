# PresidentialAlert.app

A simple site to generate custom Presidential Alerts.

## • About

I noticed on [Twitter](https://twitter.com/search?f=tweets&q=PresidentialAlert) and [Reddit](https://www.reddit.com/search?q=presidentialalert) that people were making custom Presidential Alerts in photoshop, so I made this website in a few hours on the day the Presidential Alert went out on October 3rd, 2018. That night, I submitted to a few websites and forums. The next morning it was featured on [ProductHunt](https://www.producthunt.com/posts/presidentialalert-app). Instagram accounts and Subreddits dedicated to memes were the biggest pusher of this. In the first few hours, I was seeing close to 300 concurrent users in Google Analytics. I created [Gab][https://gab.com/alertpresident] and
[Twitter](https://twitter.com/alertpresident) accounts to share some of the best ones and to get some buzz around people using it and sharing with the [#PresidentialAlert](https://twitter.com/search?f=tweets&q=PresidentialAlert) hashtags. After 3 days, the buzz died down and 2 months later I've cleaned up the code and published here for fun.

___
### • Popularity

Here's some of the highlights:

![Product Hunt Post](https://github.com/miscavage/PresidentialAlert.app/raw/master/readme/presidential-alert-product-hunt-post.png)
![r/MemeEconomy](https://github.com/miscavage/PresidentialAlert.app/raw/master/readme/reddit-meme-economy-post.jpg)

## • Tech

[PresidentialAlert.app](https://www.presidentialalert.app) is a static website built using Next.js and SCSS. Gulp is used to build and bundle static assets (fonts, styles, images) into the `/static` folder for Next.js. It also uses serverless to deploy to AWS S3 and CloudFront. I have a Route 53 domain set up to the CloudFront distribution which is connected to the static S3 bucket.

![Audit](https://github.com/miscavage/PresidentialAlert.app/raw/master/readme/presidential-alert-web-audit.png)

___
### • Set up

First, install the following packages (globally) if you want to run this project out of the box.

```bash
$ npm install serverless -g
$ npm install gulp -g
```

Then, install all of the project's packages.

```bash
$ npm install
```

In your AWS account, set up a Route 53 Domain and an SSL certificate in Certificate Manager.

After, create an `env.yml` file in the root of the project and set the following variables:

```yaml
ENVIRONMENT: dev
S3_BUCKET_NAME: <%A_UNIQUE_BUCKET_NAME%>
SSL_CERTIFICATE_ARN: <%NEWLY_CREATED_SSL_CERT_ARN%> 
CLOUDFRONT_DISTRIBUTION_ID: <%CUSTOM_CLOUDFRONT_ID%> # Could be anything
```

___
### • Run it

Once the set up process is complete, to start the project in `development` mode, run the following commands:

```bash
$ npm run gulp:build-dev
$ npm run dev
```

In order to `build` and `export` the project, run the following commands. From Next.js documentation: [https://nextjs.org/docs#static-html-export]

```bash
$ npm run build
$ npm run export
```

After the `build` and `export` commands are ran, the final files will lie within the `/app` directory.

In order to deploy to serverless and upload to S3 and invalidate the CloudFront cache, run the following command:

```bash
$ npm run deploy
```

## • Todo

- Fix formatting for smaller screens
- Add other phones

## • Say Hi

Find me on Gab: [@markmiscavage](https://gab.com/markmiscavage).

Tweet at me: [@markmiscavage](https://twitter.com/markmiscavage).

## • License

MIT License

Copyright (c) 2020 Mark Miscavage

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
