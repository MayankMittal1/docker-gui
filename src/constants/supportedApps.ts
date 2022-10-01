export const supportedApps = {
  react: {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    description: "A JavaScript library for building user interfaces",
    base_image_name: "node",
    steps: {
      step_1_1: {
        name: "Choose Base Image",
        description: "Choose the base image for your app",
        command: "FROM node:{{tag}}",
      },
      step_1_2: {
        name: "Choose Base Image",
        description: "Choose the base image for your app",
        command: "FROM node:{{tag}} AS builder",
      },
      step_2: {
        name: "Set Working Directory",
        description: "Set the working directory for your app",
        command: "WORKDIR {{directory}}",
      },
      step_3: {
        name: "Copy Files",
        description: "Copy the files from your local machine to the container",
        command: "COPY {{source}} {{destination}}",
      },
      step_4_1: {
        name: "Install Dependencies",
        description: "Install the dependencies for your app",
        command: "RUN npm install",
      },
      step_4_2: {
        name: "Install Dependencies",
        description: "Install the dependencies for your app",
        command: "RUN npm ci",
      },
      step_5: {
        name: "Expose Port",
        description: "Expose the port for your app",
        command: "EXPOSE {{port}}",
      },
      step_6: {
        name: "Set Environment Variables",
        description: "Set the environment variables for your app",
        command: "ENV {{key}}={{value}}",
        multiple: true,
      },
      step_7_1: {
        name: "Set Command",
        description: "Set the command for your app",
        command: "CMD {{command}}",
      },
      step_7_2: {
        name: "Run Build",
        description: "Run the build for your app",
        command: "RUN npm run build",
      },
    },
    modes: {
      development: [
        "step_1_1",
        "step_2",
        "step_3",
        "step_4_1",
        "step_5",
        "step_6",
        "step_7_1",
      ],
      production: [
        "step_1_2",
        "step_2",
        "step_3",
        "step_4_2",
        "step_6",
        "step_7_2",
      ],
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