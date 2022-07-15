<template>
  <div class="p-4 md:p-6">
    <Stack>
      <Link left to="/" />
      <Title>Current projects</Title>
      <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
        <LinkCard
          to="/lab/experiments/june_2022"
          class="border-re aspect-video pr-8"
        >
          <Title small>Experiment in June 2022</Title>
          <p class="text-gray-500">
            Sensors and sliders and skating on propaganda
          </p>
        </LinkCard>
        <LinkCard to="/lab/experiments" class="border-re aspect-video pr-8">
          <Title small>Video analysis</Title>
          <p class="text-gray-500">Analyze and augment video data</p>
        </LinkCard>
        <LinkCard
          to="/projects/ruumiantropoloogiad/kussaoled/live"
          class="border-re aspect-video pr-8"
        >
          <Title small>Where are you</Title>
          <p class="text-gray-500">Video capture as an installation</p>
        </LinkCard>

        <LinkCard to="/lab/capture" class="border-re aspect-video pr-8">
          <Title small>Capture and store the frames</Title>
          <p class="text-gray-500">Storing the frames from live video</p>
        </LinkCard>
      </div>
      <Title>Other projects</Title>

      <div class="grid w-full auto-rows-fr gap-5 md:grid-cols-4">
        <LinkCard to="/lab/videoframe" class="border-re aspect-video pr-8">
          <Title small>Videoframes</Title>
          <p class="text-gray-500">Capturing the frames from live video</p>
        </LinkCard>
        <LinkCard to="/lab/messages" class="aspect-video pr-8">
          <Title small>Messages</Title>
          <p class="text-gray-500">Send and receive websocket messages</p>
        </LinkCard>
        <LinkCard to="/lab/chat" class="aspect-video pr-8">
          <Title small>Chat</Title>
          <p class="text-gray-500">Chat over websocket</p>
        </LinkCard>
        <LinkCard to="/lab/social" class="aspect-video pr-8">
          <Title small>Social cards</Title>
          <p class="text-gray-500">Going social using generative art</p>
        </LinkCard>
        <LinkCard to="/lab/parsedetails" class="aspect-video pr-8">
          <Title small>Details</Title>
          <p class="text-gray-500">Parsing project and event details</p>
        </LinkCard>
        <LinkCard to="/lab/draggables" class="aspect-video pr-8">
          <Title small>Draggables and Dockables</Title>
          <p class="text-gray-500">Get down to get up</p>
        </LinkCard>
        <LinkCard to="/lab/videobackground" class="aspect-video pr-8">
          <Title small>Video background</Title>
          <p class="text-gray-500">Blur your vision</p>
        </LinkCard>
        <LinkCard to="/lab/recharge" class="aspect-video pr-8">
          <Title small>Recharging button</Title>
          <p class="text-gray-500">The hardest button to recharge</p>
        </LinkCard>
        <LinkCard to="/lab/stream" class="aspect-video pr-8">
          <Title small>Go and stream</Title>
          <p class="text-gray-500">Next phase</p>
        </LinkCard>
      </div>
    </Stack>
  </div>
</template>
