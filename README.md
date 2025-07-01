# Cursor Web Agent

An AI-powered coding assistant that works across all your devices - bringing the power of Cursor's background agents to web, mobile, and tablet.

## Overview

Cursor Web Agent extends the popular Cursor IDE's AI capabilities to any device with a web browser. Launch coding tasks, fix bugs, and build features from anywhere, then seamlessly continue your work in the desktop IDE when you're ready.

**🌐 Get started at [cursor.com/agents](https://cursor.com/agents)**

## ✨ Key Features

### 🚀 Always Running
- **Background execution**: Launch complex tasks, bug fixes, or codebase questions that run while you're away
- **Asynchronous processing**: Agents work independently in isolated cloud environments
- **Continuous operation**: Let agents work while you walk, work, or sleep

### 📱 Cross-Platform Access
- **Universal compatibility**: Works on desktop, tablet, and mobile browsers
- **Progressive Web App (PWA)**: Install as a native app on iOS and Android
- **Offline capabilities**: View past agent runs without internet connection
- **Push notifications**: Get notified when agents complete tasks

### 🤝 Team Collaboration
- **Shared access**: Share agent runs with team members who have repository access
- **Review workflow**: Collaborators can review diffs and provide feedback
- **Pull request management**: Create, review, and merge PRs directly from the web interface
- **Unique shareable links**: Each agent has a shareable URL for team visibility

### 🎯 Rich Context & Control
- **Multi-modal input**: Include images and detailed instructions
- **Parallel execution**: Run multiple agents with different models simultaneously
- **Follow-up instructions**: Add context and refinements to running agents
- **Model comparison**: Compare results across different AI models

### 💬 Slack Integration
- **Trigger agents**: Mention `@Cursor` in Slack to start new coding tasks
- **Real-time notifications**: Get Slack alerts when agents complete work
- **Team coordination**: Seamless integration with existing team workflows

## 🛠 How It Works

### Quick Setup
1. **Visit the web app**: Go to [cursor.com/agents](https://cursor.com/agents)
2. **Sign in**: Log in with your Cursor account
3. **Connect GitHub**: Link your GitHub account for repository access
4. **Start your first agent**: Describe a task and watch the agent get to work

### PWA Installation

#### iOS
1. Open [cursor.com/agents](https://cursor.com/agents) in Safari
2. Tap the share button
3. Select "Add to Home Screen"

#### Android
1. Open the URL in Chrome
2. Tap the menu button
3. Select "Add to Home Screen" or "Install App"

### Environment Setup

Cursor Web Agent runs in isolated Ubuntu-based cloud machines with:
- **Internet access**: Can install packages and access external resources
- **GitHub integration**: Automatic repository cloning and branch management
- **Custom environments**: Configure via `.cursor/environment.json`
- **Snapshot capabilities**: Save and restore development environments

## 🔧 Technical Architecture

### Cloud Infrastructure
- **Isolated VMs**: Each agent runs in a separate AWS-based virtual machine
- **Automatic scaling**: On-demand environment provisioning
- **Secure execution**: Encrypted storage and isolated networking

### Development Environment
```json
{
  "snapshot": "POPULATED_FROM_SETTINGS",
  "install": "npm install",
  "terminals": [
    {
      "name": "Run Next.js",
      "command": "npm run dev"
    }
  ]
}
```

### Model Support
- **Max Mode compatibility**: Uses high-performance AI models
- **Multi-model support**: Claude, GPT-4, and other advanced models
- **Token-based pricing**: Pay only for AI model usage

## 💰 Pricing

- **Compute**: Currently **free** for agent execution
- **AI models**: Usage-based pricing for selected models
- **Requirements**: Pro Trial or paid plan with usage-based pricing enabled
- **Background agents**: Same pricing model as desktop Background Agents

## 🔐 Security & Privacy

### Data Protection
- **Privacy Mode**: Available for enhanced security
- **No training data**: Code never used for model training (Privacy Mode)
- **Encrypted storage**: Code stored encrypted-at-rest using KMS
- **Limited retention**: Data retained only for agent execution purposes

### Access Controls
- **GitHub permissions**: Requires read-write access to target repositories
- **Team permissions**: Repository access controls who can view agent runs
- **Secure authentication**: OAuth integration with GitHub

### Security Considerations
- **Internet access**: Agents can access external resources
- **Auto-execution**: Commands run automatically (prompt injection risk)
- **Isolated environments**: Each agent runs in a separate VM

## 🚀 Use Cases

### Bug Fixes
- **Mobile debugging**: Start fixes while away from your desk
- **Emergency patches**: Quick responses to critical issues
- **UI/UX improvements**: Visual debugging with screenshot context

### Feature Development
- **Rapid prototyping**: Build features while commuting
- **Component creation**: Generate reusable code components
- **API integration**: Connect services and endpoints

### Code Maintenance
- **Dependency updates**: Automated package upgrades
- **Refactoring tasks**: Large-scale code improvements
- **Documentation**: Generate and update project docs

### Team Coordination
- **Code reviews**: Collaborative review process
- **Knowledge sharing**: Share agent solutions across team
- **Onboarding**: Help new team members understand codebases

## 🔗 Integration with Desktop Cursor

### Seamless Handoff
- **"Open in Cursor"**: One-click transition to desktop IDE
- **Synchronized state**: Continue exactly where agents left off
- **Branch management**: Automatic branch creation and switching
- **Change review**: Full diff visibility in desktop environment

### Workflow Benefits
- **Mobile inception**: Start tasks on mobile, finish on desktop
- **Context preservation**: All agent context transfers to IDE
- **Continuous development**: Never lose momentum between devices

## 📊 Enterprise Features

### Team Management
- **Repository access control**: Fine-grained permissions
- **Usage analytics**: Track team agent utilization
- **Billing integration**: Consolidated billing across team
- **Admin controls**: Centralized team settings

### Security & Compliance
- **SOC 2 certified**: Enterprise-grade security standards
- **Private repositories**: Full support for private codebases
- **Audit trails**: Complete history of agent actions
- **Data residency**: Control where data is processed

## 🛟 Troubleshooting

### Common Issues

**Agents not starting:**
- Verify GitHub account connection
- Check repository permissions
- Ensure Pro plan or trial is active
- Enable usage-based pricing in Dashboard

**Mobile app issues:**
- Clear browser cache
- Verify same account across devices
- Check PWA installation status
- Refresh the page

**Slack integration problems:**
- Confirm workspace admin installed Cursor app
- Verify proper permissions
- Check notification settings

## 🔮 Future Roadmap

### Planned Features
- **Auto-merging**: Direct merge from Cursor without GitHub
- **Smart context**: Enhanced task context awareness
- **Conflict resolution**: Automatic handling of overlapping branches
- **Additional VCS**: Support for GitLab, BitBucket, and others

### Platform Expansion
- **Enhanced mobile UX**: Native mobile apps
- **Offline capabilities**: Extended offline functionality
- **Performance improvements**: Faster agent startup times

## 📚 Resources

- **Official Documentation**: [docs.cursor.com/get-started/web-and-mobile-agent](https://docs.cursor.com/get-started/web-and-mobile-agent)
- **Background Agents Guide**: [docs.cursor.com/background-agent](https://docs.cursor.com/background-agent)
- **Slack Integration**: [docs.cursor.com/integrations/slack](https://docs.cursor.com/integrations/slack)
- **Community Forum**: [forum.cursor.com](https://forum.cursor.com)
- **Support**: background-agent-feedback@cursor.com

## 🏢 Company

Cursor Web Agent is developed by **Anysphere**, the company behind the popular Cursor IDE. With over $500M in annualized recurring revenue and adoption by more than half of the Fortune 500 (including Nvidia, Uber, and Adobe), Cursor has established itself as a leader in AI-powered development tools.

---

*Ready to code from anywhere? Start your first web agent at [cursor.com/agents](https://cursor.com/agents)*
