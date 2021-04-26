# Twelve-Factor App

- The Twelve-factor app is a set of 12        principles or best practices for building web applications which now days are more commonly know as Software As A Service (SAAS) applications.
- These principles help us to create the applications that use declarative programming for automation of setup which in turns reduces the development time and cost of the projects when a new developer joins it.
- It does not rely on any particular OS and are easily portable, are highly suitable for deployment on cloud and allows continous deployment and are horizontally scatable without requiring many changes in the codebase. The factors are as follows:

## 1. Codebase

- Single codebase per application tracked in version control with many deploys.

- Each component of that system will be known as an application that shall follow the principles of the 12-factor apps.

## 2. Dependencies
- Explicitly declare and isolate dependencies.
- It increases the speed of the development as now the developer is free from the task of managing the correct version of the libraries.

- There is no need for explicitly downloading the required JARs anymore.

## 3. Config
- Store config in the environment.
- The source code and the configurations must be completely separated from each other.

- We must store all the configurations like DB credentials, path, URI in the environment variables as in general practice in the industry, application’s configurations vary from environment to environment like dev, test, prod, etc.
- There is a very simple way in which you can check whether your current application follows this Config principle or not by asking yourself that whether you can make your application open source right now without making any changes and without compromising any of your credentials.

## 4. Backing Services
- Treat backing services as attached resources.
- any service that your application consumes over the network is known as a backing service.
- Your application must treat these services as resources which it is consuming over the network.

- It gives us the advantage that our services become easily interchangeable and offer great portability to our application.

## 5. Build, Release and Run
- Strictly separate built and run stages.

- The deployment of your application must be properly separated into three non-overlapping non-dependent phases namely build, release and run.

- The build phase constitutes the compilation of the code which in the end generates the artifact like a JAr or WAR file.

- The last phase includes the running of the instance of the application.

## 6. Processes
- Store any data that is required to persist in a stateful backing service, such as databases. The idea is that the process is stateless and shares absolutely nothing.

- While many developers are used to “sticky sessions”, storing information in the session expecting the next request will be from the same service contradicts this methodology.

## 7. Port Binding
- 12-factor apps must always be independent from additional applications. Every function should be its own process—in full isolation.

- In a traditional environment, we assume that different processes handle different functionalities. As such, it’s easy to further assume these functionalities are available via a web protocol, such as HTTP, making it likely that apps will run behind web servers, like Apache or Tomcat. But this is counter to the 12-factor methodology.

## 8. Concurrency
- A true 12-factor app is designed for scaling. Build your applications so that scaling in the cloud is seamless. When you develop the app to be concurrent, you can spin up new instances to the cloud effortlessly.

- In order to add more capacity (start additional processes on additional machines), your app should be able to add more instances instead of more memory or CPU on the local machine.

## 9. Disposability

- The concept of disposable processes means that an application can die at any time, but it won’t affect the user—the app can be replaced by other apps, or it can start right up again.

- Building disposability into your app ensures that the app shuts down gracefully: it should clean up all utilized resources and shut down smoothly.

## 10. Development/Production Parity

- Applications deployed to development and production should have parity. Essentially, there should be only the slightest difference between both deployments.

- A vast difference may lead to unintended compatibility issues between dev and production code. When building a 12-factor app, backing services between dev and prod must be the same; a difference here could cause significant issues down the line.

## 11. Logs

- Unlike monolithic and traditional apps that store log information in a file, this principle maintains that you should stream logs to a chosen location—not simply dump them into a log file.

- Typically, logs don’t reside in the same place within cloud-based environments after every burn. As new processes start or your app crashes, the logs will be distributed across several cloud machines; they won’t sit on a single machine or host.

- Solve this issue by naming a common place for the logs to stream. In some instances, you can simply redirect Stdout to a file. More likely, however, you’ll want to deploy a log router like Fluentd and save the logs to Hadoop or a specific service, like Splunk.

## 12. Admin processes

- The final 12-factor app principle proposes separating administrative tasks from the rest of your application. These tasks might include migrating a database or inspecting records.

- Though the admin processes are separate, you must continue to run them in the same environment and against the base code and config of the app itself. Shipping the admin tasks code alongside the application prevents drift.
