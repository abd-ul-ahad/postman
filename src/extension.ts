// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { WebPanel } from "./webPanel";
import { SideBAr } from "./sideBar";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "postman" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('postman.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Postman!');
	}));

	// Sidebar
	const sidebarProvider = new SideBAr(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("postman-sidebar", sidebarProvider)
	);

	// Panel
	context.subscriptions.push(
		vscode.commands.registerCommand("postman.RunPostmanClone", () => {
			WebPanel.createOrShow(context.extensionUri);
		})
	);


}




// this method is called when your extension is deactivated
export function deactivate() { }