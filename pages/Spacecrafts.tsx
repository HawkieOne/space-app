import { useEffect, useState } from 'react'
import { spaceAPI } from '../api/spaceDevsApi'
import { BASE_URL } from '../api/utilitites/provider'
import Page from '../components/shared/Page'
import SkeletonCardList from '../components/shared/skeletons/SkeletonCardList'
import SubPage from '../components/shared/SubPage'
import SpacecraftCard from '../components/Spacecraft/SpacecraftCard'
import { Spacecraft } from '../shared/interfaces'

export default function Spacecrafts() {
  return (
    <Page
      title="Spacecrafts"
      listItem={<SpacecraftCard />}
      fetchFunc={spaceAPI.getSpacecrafts!}
      baseLink={`${BASE_URL}spacecraft`}
    />
  )
}
