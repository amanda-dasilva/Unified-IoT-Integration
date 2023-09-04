# Unified IoT Integration: Connecting MongoDB, Arduino LED, and Bangle.js via Node-RED

This project aims to create a unified and real-time data communication system by connecting various sources, including a JSON API linked to a MongoDB database, an Arduino LED using Johnny-Five, and streaming accelerometer data from a Bangle.js device. It involves the integration of these diverse data streams into a cohesive Node-RED flow, facilitating simultaneous communication and interaction across all three sources. This project enables seamless data exchange and synchronization, offering a versatile and interconnected platform for various applications.

## Preliminary Step

1. The project should to connect individual flows to a JSON API on top of a MongoDB database, an Arduino LED (using Johnny-Five), and a Bangle.js streaming acceleromter data, build a single, combined Node-RED flow to talk to all three simultaneously. Namely, this new flow will:

 a. Be able to accept streaming accelerometer data from the Bangle.js watch

  If using the sample Bangle.js App code provided, make sure to Source all locations of provided code samples.

 b. Based on the incoming accelerometer data (e.g. the watch is moving left vs. moving right) the code will either:

  Turn the Arduino LED on

  Turn the Arduino LED off

 c. Record **both** the LED state and timestamp of the event in a MongoDB database

## PART 2

1. Replace both the sensor used on the Bangle.js and the attached device/sensor on the Arduino and get a new Node-RED flow setup for that.

2. You may also try **sending messages to the Bangle.js** and have something happen on the watch based on Arduino events, rather than using a different Bangle.js sensor as input.

3. Make sure that the new flow works and that the new data is recorded in the database.

### HOW TO RUN THIS PROJECT

Follow these steps:

**Step 1: Install Node.js and npm:**

If you haven't already, you need to install Node.js and npm (Node Package Manager) on your computer. You can download them from the official website: [Node.js](https://nodejs.org/).

**Step 2: Install Visual Studio Code:**

If you don't have VSCode installed, you can download it from the official website: [Visual Studio Code](https://code.visualstudio.com/).

**Step 3: Install Node-RED:**

You'll need to install Node-RED globally on your system. Open your terminal and run the following command:

```bash
npm install -g --unsafe-perm node-red
```

**Step 4: Clone the GitHub Repository:**

Open your terminal (command prompt or PowerShell on Windows, or Terminal on macOS/Linux) and navigate to the directory where you want to store the project. Then, use the `git clone` command to clone the repository. Replace `<repository-url>` with the URL of this GitHub repository you want to clone:

```bash
git clone <repository-url>
```

**Step 5: Open the Project in VSCode:**

Navigate to the project folder in your terminal:

```bash
cd <project-folder>
```

Then, open the project in VSCode:

```bash
code .
```

This command will open VSCode with the project folder loaded.

**Step 6: Install Project Dependencies:**

In the VSCode terminal, make sure you are inside the project folder. Then, run the following command to install the project's dependencies specified in the `package.json` file:

```bash
npm install
```

**Step 7: Start the Node.js Application:**

Once the dependencies are installed, you can start the Node.js application. Check the entry point of the application (e.g., `app.js` or `server.js`) and look for a script defined in the `package.json` file. The script might be called something like `"start"` or `"dev"`. Run it using the following command:

```bash
npm start
```

If you have `nodemon` listed as a dev dependency and it's used to run the application during development, you can use the following command instead to automatically restart the server when you make changes:

```bash
npm run dev
```

Make sure to use the appropriate script name defined in your `package.json`.

**Step 8: Start Node-RED:**

In a separate terminal, start Node-RED:

```bash
node-red
```

Node-RED will start, and you can access the Node-RED editor by opening your web browser and navigating to `http://localhost:1880`.