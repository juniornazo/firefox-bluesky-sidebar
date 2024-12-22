sidebarProfiles = {
	bluesky: "https://bsky.app",
}

function setSidebarAttributes(profile) {
	browser.sidebarAction.getPanel({}).then((value) => {
		if (value !== profile) {
			browser.sidebarAction.setPanel({panel: profile})
		}
	})
}

changeProfile();

browser.storage.onChanged.addListener(changeProfile);
