export const supportedApps = {
  react_dev: {
    name: "React-DEV",
    step_count: 1,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    description: "A JavaScript library for building user interfaces",
    base_image_name: "node",
    steps: {
      step_1: {
        name: "Choose Base Image",
        description: "Choose the base image for your app",
        command: "FROM node:{{tag}}",
        variables: ["tag"],
      },
      step_2: {
        name: "Set Working Directory",
        description: "Set the working directory for your app",
        command: "WORKDIR {{directory}}",
        variables: ["directory"],
      },
      step_3: {
        name: "Copy Files",
        description: "Copy the files from your local machine to the container",
        command: "COPY {{source}} {{destination}}",
        variables: ["source", "destination"],
      },
      step_4: {
        name: "Install Dependencies",
        description: "Install the dependencies for your app",
        command: "RUN npm install",
      },
      step_5: {
        name: "Expose Port",
        description: "Expose the port for your app",
        command: "EXPOSE {{port}}",
        variables: ["port"],
      },
      step_7: {
        name: "Set Command",
        description: "Set the command for your app",
        command: "CMD {{command}}",
        variables: ["command"],
      },
    },
  },
  react_prod: {
    name: "React-PROD",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    step_count: 2,
    supportedImages: ["nginx", "ubuntu"],
    description: "A JavaScript library for building user interfaces",
    base_image_name: "node",
    steps: {
      step_1: {
        name: "Choose Base Image",
        description: "Choose the base image for your app",
        command: "FROM node:{{tag}} AS builder",
        variables: ["tag"],
      },
      step_2: {
        name: "Set Working Directory",
        description: "Set the working directory for your app",
        command: "WORKDIR {{directory}}",
        variables: ["directory"],
      },
      step_3: {
        name: "Copy Files",
        description: "Copy the files from your local machine to the container",
        command: "COPY {{source}} {{destination}}",
        variables: ["source", "destination"],
      },
      step_4: {
        name: "Install Dependencies",
        description: "Install the dependencies for your app",
        command: "RUN npm ci",
      },
      step_5: {
        name: "Expose Port",
        description: "Expose the port for your app",
        command: "EXPOSE {{port}}",
        variables: ["port"],
      },
      step_7: {
        name: "Run Build",
        description: "Run the build for your app",
        command: "RUN npm run build",
      },
    },
  },
  node: {
    name: "Node",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine",
    base_image_name: "node",
  },
  go: {
    name: "Go",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
    description:
      "A statically typed, compiled programming language designed at Google",
    base_image_name: "golang",
  },
};

export const supportedBuildImages = {
  nginx: {
    name: "Nginx",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Nginx_logo.svg/1200px-Nginx_logo.svg.png",
    description:
      "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
    base_image_name: "nginx",
    steps: {
      step_1: {
        name: "Choose Base Image",
        description: "Choose the base image for your app",
        command: "FROM nginx:{{tag}}",
      },
      step_2: {
        name: "Copy Nginx Configuration",
        description:
          "Copy the Nginx configuration from your local machine to the container",
        command: "COPY {{source}} /etc/nginx/conf.d/default.conf",
      },
      step_3: {
        name: "Copy Build",
        description: "Copy the build from your local machine to the container",
        command: "COPY --from=builder {{source}} /usr/share/nginx/html",
      },
    },
  },
  ubuntu: {
    name: "Ubuntu",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Logo-ubuntu_cof-orange-hex.svg/1200px-Logo-ubuntu_cof-orange-hex.svg.png",
    description:
      "Ubuntu is a free and open-source Linux distribution based on Debian.",
    base_image_name: "ubuntu",
    steps: {
      step_1: {
        name: "Choose Base Image",
        description: "Choose the base image for your app",
        command: "FROM ubuntu:{{tag}}",
      },
      step_2: {
        name: "Set Working Directory",
        description: "Set the working directory for your app",
        command: "WORKDIR {{directory}}",
      },
      step_3: {
        name: "Copy Build",
        description: "Copy the build from your local machine to the container",
        command: "COPY --from=builder {{source}} ./",
      },
      step_4: {
        name: "Run Command",
        description: "Set the entrypoint for your app",
        command: "CMD {{command}}",
      },
    },
  },
};
