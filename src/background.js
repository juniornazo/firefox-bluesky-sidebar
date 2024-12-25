sidebarProfiles = {
	bluesky: "https://bsky.app/",
	tokimeki: "https://tokimeki.blue"
}

function changeProfile() {
	browser.storage.sync.get("tweetdeck").then((res) => {
		if (res.tokimeki === true) {
			setSidebarAttributes(sidebarProfiles.tokimeki)
		} else {
			setSidebarAttributes(sidebarProfiles.bluesky)
		}
	});
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