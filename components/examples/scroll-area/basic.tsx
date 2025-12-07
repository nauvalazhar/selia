import { ScrollArea } from 'components/selia/scroll-area';
import { Text } from 'components/selia/text';

export default function Basic() {
  return (
    <ScrollArea className="w-full lg:w-8/12 h-52 border border-border rounded shadow">
      <div className="p-4 space-y-6">
        <Text>
          Biocentrism is a philosophical worldview that places biological life
          at the center of its value system, asserting that all living beings
          have inherent worth and moral standing. Unlike anthropocentrism, which
          prioritizes human interests and regards the environment and non-human
          life mainly in terms of their utility to humans, biocentrism
          recognizes the intrinsic value of all living organisms, from the
          smallest bacterium to the largest mammal.
        </Text>
        <Text>
          The roots of biocentrism are found in various ancient and indigenous
          traditions that hold the natural world in deep reverence. In modern
          philosophy, biocentrism emerged as an environmental ethic in response
          to growing concerns about biodiversity loss, climate change, and the
          destructive impacts of human activity on ecosystems.
        </Text>
        <Text>
          Key to biocentrism is the idea that humans are not separate from or
          superior to other forms of life, but rather part of a complex,
          interconnected web. This perspective argues for moral consideration
          and respect for all living beings, not just humans. Ethical
          implications of biocentrism challenge us to rethink practices such as
          deforestation, industrial agriculture, and animal exploitation, urging
          policies and actions that protect the welfare and habitats of all life
          forms.
        </Text>
        <Text>
          Critics of biocentrism contend that it may be impractical to grant
          equal moral status to all living things, especially when the interests
          of different organisms conflict. However, proponents argue that
          shifting toward a biocentric mindset is necessary for sustainability
          and the long-term health of the planet.
        </Text>
        <Text>
          In conclusion, biocentrism offers a compelling alternative to
          traditional human-centered ethics, encouraging a deeper appreciation
          and responsibility for the living world. By embracing biocentric
          values, we move toward a more just and ecologically balanced future,
          where the flourishing of all life is our collective concern.
        </Text>
      </div>
    </ScrollArea>
  );
}
