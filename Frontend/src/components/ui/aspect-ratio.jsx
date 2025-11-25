'use client'


            param($match)
            $firstChar = $match.Groups[1].Value.ToUpper()
            $rest = $match.Groups[2].Value
            "import * as $firstChar$rest"
         from '@radix-ui/react-aspect-ratio'

function AspectRatio({
  ...props
}) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }
