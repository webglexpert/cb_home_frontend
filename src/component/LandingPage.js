import React, { useState } from 'react';
import '../styles/main.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
  InputGroup,
  InputRightElement,
  UnorderedList,
  ListItem,
  Box,
  Heading,
  AspectRatio,
  Button,
  Text,
  Stack,
  SimpleGrid,
  Input,
  GridItem,
  Grid,
  Select,
} from '@chakra-ui/react';

export default function LandingPage() {
  const [addressInputState, setAddressInputState] = useState(false);
  return (
    <>
      <Box
        className="main-div"
        backgroundSize={'cover'}
        backgroundPosition={'center'}
        backgroundImage={
          'linear-gradient(to bottom, rgba(45,161,236, 0.3), rgba(45,161,236, 0.3)), url("/assets/images/C900B263-7E81-4C04-8C77-D9AC3A1E491C-1024x768.jpg")'
        }
      >
        <Box marginX={'160px'} textAlign={'center'}>
          <Box color={'white'} marginTop={'30px'}>
            <Heading size={'lg'}>
              Sell Your House Fast Anywhere In Oregon!
            </Heading>
            <Text marginY={'20px'}>
              <Text as="b">No</Text> Fees. <Text as="b">No</Text> Commissions.
              Put More Cash In Your Pocket.
            </Text>
            <Heading size={'md'}>
              You’ll Get A Fair Offer – You Choose The Closing Date. We Pay All
              Costs!
            </Heading>
            <Text marginY={'15px'}>Fill out the short form…</Text>
          </Box>
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={6}
            rowGap={1}
            marginY={'50px'}
          >
            <GridItem colSpan={2}>
              <Box
                color={'#721c24'}
                backgroundColor={'#f8d7da'}
                border={'#f5c6cb 1px solid'}
                borderRadius="5px"
                padding={'20px'}
                display={!addressInputState ? 'none' : 'block'}
              >
                <Text fontSize={'4xl'} as="b">
                  There was a problem with your submission. Please review the
                  fields below.
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Text color={addressInputState ? 'crimson' : 'white'}>
                Property Address
                <Text as="b" color={'crimson'}>
                  {' '}
                  *
                </Text>
              </Text>
              <InputGroup>
                <Input
                  bg={'white'}
                  focusBorderColor={'blackAlpha.100'}
                  isInvalid={addressInputState}
                  errorBorderColor="crimson"
                  placeholder={'Enter your Address'}
                />
                {addressInputState ? (
                  <InputRightElement
                    children={<AiOutlineInfoCircle color="crimson" />}
                  />
                ) : (
                  ''
                )}
              </InputGroup>
            </GridItem>

            {addressInputState ? (
              <>
                <GridItem colSpan={2}>
                  <Text color={'white'} fontSize={'sm'}>
                    Street Address
                  </Text>
                  <InputGroup>
                    <Input
                      bg={'white'}
                      focusBorderColor={'blackAlpha.100'}
                      isInvalid={addressInputState}
                      errorBorderColor="crimson"
                    />
                    {addressInputState ? (
                      <InputRightElement
                        children={<AiOutlineInfoCircle color="crimson" />}
                      />
                    ) : (
                      ''
                    )}
                  </InputGroup>
                  <Text color="white" fontSize={'sm'}>
                    Address Line 2
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <InputGroup>
                    <Input
                      bg={'white'}
                      focusBorderColor={'blackAlpha.100'}
                      isInvalid={addressInputState}
                      errorBorderColor="crimson"
                    />
                    {addressInputState ? (
                      <InputRightElement
                        children={<AiOutlineInfoCircle color="crimson" />}
                      />
                    ) : (
                      ''
                    )}
                  </InputGroup>
                  <Text color="white" fontSize={'sm'}>
                    City
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <InputGroup>
                    <Select
                      bg={'white'}
                      focusBorderColor={'blackAlpha.100'}
                      isInvalid={addressInputState}
                      errorBorderColor="crimson"
                      defaultValue="Alabama"
                    >
                      <option value="Alabama" selected="selected">
                        Alabama
                      </option>
                      <option value="Alaska">Alaska</option>
                      <option value="Arizona">Arizona</option>
                      <option value="Arkansas">Arkansas</option>
                      <option value="California">California</option>
                      <option value="Colorado">Colorado</option>
                      <option value="Connecticut">Connecticut</option>
                      <option value="Delaware">Delaware</option>
                      <option value="District of Columbia">
                        District of Columbia
                      </option>
                      <option value="Florida">Florida</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Idaho">Idaho</option>
                      <option value="Illinois">Illinois</option>
                      <option value="Indiana">Indiana</option>
                      <option value="Iowa">Iowa</option>
                      <option value="Kansas">Kansas</option>
                      <option value="Kentucky">Kentucky</option>
                      <option value="Louisiana">Louisiana</option>
                      <option value="Maine">Maine</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Massachusetts">Massachusetts</option>
                      <option value="Michigan">Michigan</option>
                      <option value="Minnesota">Minnesota</option>
                      <option value="Mississippi">Mississippi</option>
                      <option value="Missouri">Missouri</option>
                      <option value="Montana">Montana</option>
                      <option value="Nebraska">Nebraska</option>
                      <option value="Nevada">Nevada</option>
                      <option value="New Hampshire">New Hampshire</option>
                      <option value="New Jersey">New Jersey</option>
                      <option value="New Mexico">New Mexico</option>
                      <option value="New York">New York</option>
                      <option value="North Carolina">North Carolina</option>
                      <option value="North Dakota">North Dakota</option>
                      <option value="Ohio">Ohio</option>
                      <option value="Oklahoma">Oklahoma</option>
                      <option value="Oregon">Oregon</option>
                      <option value="Pennsylvania">Pennsylvania</option>
                      <option value="Rhode Island">Rhode Island</option>
                      <option value="South Carolina">South Carolina</option>
                      <option value="South Dakota">South Dakota</option>
                      <option value="Tennessee">Tennessee</option>
                      <option value="Texas">Texas</option>
                      <option value="Utah">Utah</option>
                      <option value="Vermont">Vermont</option>
                      <option value="Virginia">Virginia</option>
                      <option value="Washington">Washington</option>
                      <option value="West Virginia">West Virginia</option>
                      <option value="Wisconsin">Wisconsin</option>
                      <option value="Wyoming">Wyoming</option>
                      <option value="Armed Forces Americas">
                        Armed Forces Americas
                      </option>
                      <option value="Armed Forces Europe">
                        Armed Forces Europe
                      </option>
                      <option value="Armed Forces Pacific">
                        Armed Forces Pacific
                      </option>
                    </Select>
                    {addressInputState ? (
                      <InputRightElement
                        children={<AiOutlineInfoCircle color="crimson" />}
                      />
                    ) : (
                      ''
                    )}
                  </InputGroup>
                  <Text color="white" fontSize={'sm'}>
                    State
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <InputGroup>
                    <Input
                      bg={'white'}
                      focusBorderColor={'blackAlpha.100'}
                      isInvalid={addressInputState}
                      errorBorderColor="crimson"
                    />
                    {addressInputState ? (
                      <InputRightElement
                        children={<AiOutlineInfoCircle color="crimson" />}
                      />
                    ) : (
                      ''
                    )}
                  </InputGroup>
                  <Text color="white" fontSize={'sm'}>
                    ZIP Code
                  </Text>
                </GridItem>
                <GridItem />
              </>
            ) : (
              ''
            )}
            <GridItem colSpan={1}>
              <Text color="white">Phone</Text>
              <Input bg={'white'} />
            </GridItem>
            <GridItem colSpan={1}>
              <Text color={addressInputState ? 'crimson' : 'white'}>
                Email
                <Text as="b" color={'crimson'}>
                  {' '}
                  *
                </Text>
              </Text>
              <Input
                bg={'white'}
                focusBorderColor={'blackAlpha.100'}
                isInvalid={addressInputState}
                errorBorderColor="crimson"
                placeholder={'Enter your Address'}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                colorScheme={'secondary'}
                _hover={{ bg: 'secondary.100' }}
                width={'100%'}
                padding={'25px'}
                marginTop={'10px'}
                onClick={() => setAddressInputState(true)}
              >
                <Text fontSize="xl" color={'black'}>
                  Get My Fair Cash Offer {'>>'}
                </Text>
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Box bg={'#4a4a4a'} className={'main-div'}>
        <Grid
          templateColumns="repeat(7, 1fr)"
          gap={6}
          marginTop={'60px'}
          marginBottom={'30px'}
        >
          <GridItem colSpan={'2'}>
            <img
              alt="no_image"
              src="/assets/images/FB-logo-White-300x138.png"
            ></img>
          </GridItem>
          <GridItem colSpan={'5'} color={'white'} textAlign={'center'}>
            <Heading size={'lg'}>“The process was very simple.”</Heading>
            <Text marginY={'10px'}>
              Bill and Jennifer were a pleasure to work with and were able to
              find a buyer way faster than I thought possible. The process was
              very simple.
            </Text>
            <Text textAlign={'right'} marginTop={'30px'}>
              Josh R. Eugene Or.
            </Text>
          </GridItem>
        </Grid>
      </Box>

      {/* We Buy Houses In Oregon! */}

      <Box className="main-div" textAlign={'center'}>
        <Heading fontWeight={'normal'} marginY={'40px'}>
          We Buy Houses In Oregon!
        </Heading>
        <Heading fontWeight={'normal'}>
          Get Cash For Your House Or Mobile Home.
        </Heading>
        <Heading fontWeight={'normal'}>
          We’re Not A Broker Or A Listing Service, So There Are No Fees Or
          Commissions.{' '}
        </Heading>
        <Stack textAlign={'left'} marginBottom="40px">
          <Text>
            We will not ask you to list your house because we want to{' '}
            <Text as="b">buy</Text> real estate, not list it for a commission.{' '}
          </Text>

          <Text>
            You can sell your house fast without having to list it for 6 months.
            Imagine avoiding all those months of waiting!
          </Text>

          <Text>
            Stop the frustration of your unwanted property. Let us{' '}
            <Button variant={'linkPrimary'}>buy your house now</Button>,{' '}
            <Text as="b">regardless of condition</Text>.
          </Text>
        </Stack>
        <Heading fontWeight={'normal'} textAlign={'left'}>
          Real Estate Problems We Can Help You Avoid:
        </Heading>
        <UnorderedList textAlign={'left'} padding={'10px'} spacing={1}>
          <ListItem>
            Having a <Text as="b">vacant house</Text> broken into.
          </ListItem>
          <ListItem>
            <Button variant="linkPrimary">
              <Text as="b">Foreclosure.</Text>
            </Button>{' '}
          </ListItem>
          <ListItem>Wondering how to sell an inherited house.</ListItem>
          <ListItem>
            Paying for <Text as="b">expensive repairs</Text>.{' '}
          </ListItem>
          <ListItem>
            <Text as="b">Waiting 6-12 months</Text> to see if an agent can sell
            your house.
          </ListItem>
          <ListItem>
            Waiting for a long <Text as="b">probate</Text> process to end.{' '}
          </ListItem>
        </UnorderedList>
        <Stack textAlign={'left'}>
          <Text>
            It doesn’t matter to us if you’re living in the house, you’re
            renting it out, or it’s just vacant. We help homeowners who are
            facing these types of frustrating problems.
          </Text>

          <Text>
            <Text as="b">We will listen to you</Text> when you call us. We
            understand that your individual circumstances may be different than
            others. And that’s OK. We will still work with you.
          </Text>

          <Text>
            Basically, if you have a property that you need to sell,{' '}
            <Text as="b">we’d like to give you a fair cash offer for it</Text>.
            Then you can choose the closing date that works for you. That means
            you could walk away from closing as soon as next week with cash in
            your pocket.
          </Text>

          <Text>
            If you want to <Text as="b">sell your house,</Text> we’re ready to
            give you a fair
            <Text as="b">
              all-cash offer. Fill out the form above or call us right now at
              (541) 236-3095
            </Text>
          </Text>
        </Stack>
      </Box>
      <Box className={'main-div'}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          paddingY={'10px'}
          bg={'#4a4a4a'}
        >
          <GridItem colSpan={'1'} paddingX={'20px'}>
            <img
              alt="no_image"
              src="/assets/images/Lookabaugh-Bio-Pic-sq.jpg"
              width={'100%'}
            ></img>
          </GridItem>
          <GridItem
            colSpan={'2'}
            color={'white'}
            textAlign={'left'}
            padding={'5px'}
          >
            <Heading size={'lg'}>
              Learn More About Oregon Cash Home Buyers
            </Heading>
            <Text marginY={'20px'}>
              My name is Bill. I am the founder and president of Oregon Cash
              Home Buyers. My wife, Jennifer, and I founded the company based on
              a very simple mission: To give homeowners options when it comes to
              selling their home while providing an honest, ethical, and
              compassionate level of service. Our number one core value is
              integrity – we will always do the right thing no matter the
              outcome. Period.
            </Text>
            <Button variant={'secondary'}>
              Learn More About Oregon Cash Home Buyers
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <Box className="main-div">
        <Heading size="lg" marginBottom={'30px'}>
          Listing Vs Selling Directly To Us
        </Heading>
        <Box
          width="300px"
          background={'#f8f8f8'}
          border={'1px solid #dee2e6'}
          display={'inline'}
          float="right"
          padding={'5px'}
        >
          <img
            alt="no_image"
            src="/assets/images/sell-your-house-fast-oregon-300x225.jpeg"
          />
          <Text fontSize={'lg'} margin={'5px'}>
            Looking to sell your house As Is and without paying any fees?
            Contact us today!
          </Text>
        </Box>
        <Stack display={'inline'} spacing={'3'}>
          <Text as="b">You can sell your house 2 ways: Slow or Fast. </Text>

          <Text>
            Listing your house with a{' '}
            <Text as="b">real estate sales agent is a slow way</Text> to get
            your house sold.{' '}
          </Text>

          <Text>
            Why? Because agents cannot guarantee that they will find a buyer
            quickly. They can only make promises and hope for the best.{' '}
          </Text>

          <Text>
            Many agents just put their listings on the MLS and then just wait
            for their phone to ring. That is not a good marketing system. Is
            that tactic really worth their expensive commissions?{' '}
          </Text>
          <Text>
            But <Text as="b">what’s even worse than high commissions</Text> is
            how you’ll feel a year from now if your house is still not sold.
          </Text>
          <Text>
            Well, some people try to sell their house themselves – FSBO (For
            Sale By Owner). But that’s like getting{' '}
            <Text as="b">another full-time job</Text>
            because every responsibility falls on you. You would have to choose
            and pay for advertising. You would have to answer phone calls from
            strangers. You would have to let some of those{' '}
            <Text as="b">strangers walk through your house</Text> so they could
            see if they liked it.{' '}
          </Text>
          <Text>
            You would still have all the costs of repair, painting, and then
            closing costs too. And you still have no guarantee that a buyer will
            come along. Since you would be doing everything yourself,{' '}
            <Text as="b">
              selling FSBO usually is even slower than using an agent.
            </Text>
          </Text>
        </Stack>
      </Box>

      {/* How Our Process Works */}
      <Box className="main-div" textAlign={'center'}>
        <Heading fontSize={'3xl'} marginBottom={'10px'}>
          How Our Process Works
        </Heading>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <Box className={'step-box'}>
            <Box bg={'#4a4a4a'} padding={'15px'}>
              <Heading size={'lg'} color={'white'}>
                Step 1
              </Heading>
            </Box>
            <Box padding={'15px'}>
              <Heading color={'primary.100'} size={'lg'}>
                CALL OR SUBMIT
              </Heading>
              <Heading size={'lg'}>YOUR INFO</Heading>
              <Box
                width={'150px'}
                height={'150px'}
                padding={'27px'}
                bg={'grey.100'}
                borderRadius={'75px'}
                marginX={'auto'}
                marginTop={'20px'}
                marginBottom={'40px'}
              >
                <img alt="no_image" src="/assets/images/phone-300x300.png" />
              </Box>
              <Text as="b">
                We review the details of your home and set an appointment to
                speak with you.
              </Text>
            </Box>
          </Box>
          <Box className={'step-box'}>
            <Box bg={'#4a4a4a'} padding={'15px'}>
              <Heading size={'lg'} color={'white'}>
                Step 2
              </Heading>
            </Box>
            <Box padding={'15px'}>
              <Heading color={'primary.100'} size={'lg'}>
                WE GIVE YOU A
              </Heading>
              <Heading size={'lg'}>FAIR CASH OFFER</Heading>
              <Box
                width={'150px'}
                height={'150px'}
                padding={'27px'}
                bg={'grey.100'}
                borderRadius={'75px'}
                marginX={'auto'}
                marginTop={'20px'}
                marginBottom={'40px'}
              >
                <img alt="no_image" src="/assets/images/paper-300x295.png" />
              </Box>
              <Text as="b">
                We get a cash offer to you in 24 hours. No Obligation. No Fees.
                No Commissions
              </Text>
            </Box>
          </Box>
          <Box className={'step-box'}>
            <Box bg={'#4a4a4a'} padding={'15px'}>
              <Heading size={'lg'} color={'white'}>
                Step 3
              </Heading>
            </Box>
            <Box padding={'15px'}>
              <Heading color={'primary.100'} size={'lg'}>
                CHOOSE YOUR
              </Heading>
              <Heading size={'lg'}>CLOSING DATE</Heading>
              <Box
                width={'150px'}
                height={'150px'}
                padding={'27px'}
                bg={'grey.100'}
                borderRadius={'75px'}
                marginX={'auto'}
                marginTop={'20px'}
                marginBottom={'40px'}
              >
                <img alt="no_image" src="/assets/images/Schedule-300x295.png" />
              </Box>
              <Text as="b">
                We can close on your schedule, fast or slow. Sell your house on
                your terms.
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
        <Box
          width={'100%'}
          height={'2px'}
          bg={'black'}
          marginTop="40px"
          marginBottom={'20px'}
        ></Box>
      </Box>

      {/* We Buy Oregon Houses In Any Condition, In Any Situation, And In Any Timeframe.  */}

      <Box className="main-div">
        <Heading size={'lg'} fontWeight={'normal'} marginBottom={'15px'}>
          We Buy Oregon Houses In Any Condition, In Any Situation, And In Any
          Timeframe.{' '}
        </Heading>
        <Stack spacing={'3'}>
          <Text>
            You’ll find that we work differently at Oregon Cash Home Buyers.
            You’ll{' '}
            <Text as="b">
              get you a fair all-cash offer on your Eugene house
            </Text>{' '}
            in about 24 hours when you call us or submit the short form below.{' '}
          </Text>
          <Text>
            <Text as="b">Let us know the date that you want to close</Text> so
            we can get our team rolling on it right away. If you want to get
            cash in your pocket fast, then we need to know that as soon as
            possible so we can put buying your house at the top of our list.
          </Text>
          <Text>
            We will work hard for you. If you need cash in your pocket fast or
            you want to stop a foreclosure, our team will go into overdrive to
            make it happen.
          </Text>
          <Text>
            If your house needs repairs or has tenants, we can take care of that
            for you.{' '}
            <Text as="b">
              We make the selling process as smooth as possible
            </Text>{' '}
            for house sellers. That’s what we do. (
            <Button variant="linkPrimary">
              Go here to learn more about our house buying process
            </Button>
            .)
          </Text>
          <Text textAlign={'center'}>
            <Text as="b">
              Our goal is to give you the easiest and fastest house selling
              experience.
            </Text>{' '}
            That’s why we pay cash. And that’s why we give fair and honest
            offers quickly. If you happen to think of another way that we can
            make your house selling experience better, please tell us when we
            see you at the closing table.
          </Text>
        </Stack>
      </Box>

      {/* What Do You Have To Lose? Get Started Now... */}

      <Box className="main-div">
        <Heading size={'lg'} marginBottom={'15px'}>
          What Do You Have To Lose? Get Started Now...
        </Heading>
        <Text>
          We buy houses in ANY CONDITION in Oregon. There are no commissions or
          fees and no obligation whatsoever. Start below by giving us a bit of
          information about your property or call (541) 236-3095...
        </Text>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6}
          marginY={'40px'}
          marginX={'120px'}
          padding={'20px'}
          bg={'primary.50'}
          borderRadius={'5px'}
          border={'1px solid rgba(0,0,0,.125)'}
        >
          <GridItem colSpan={2}>
            <Text color="white" textAlign={'left'}>
              Property Address
              <Text as="b" color={'crimson'}>
                {' '}
                *
              </Text>
            </Text>
            <Input bg={'white'} />
          </GridItem>
          <GridItem colSpan={1}>
            <Text color="white" textAlign={'left'}>
              Phone
            </Text>
            <Input bg={'white'} />
          </GridItem>
          <GridItem colSpan={1}>
            <Text color="white" textAlign={'left'}>
              Email
              <Text as="b" color={'crimson'}>
                {' '}
                *
              </Text>
            </Text>
            <Input bg={'white'} />
          </GridItem>
          <GridItem colSpan={2}>
            <Button
              colorScheme={'secondary'}
              _hover={{ bg: 'secondary.100' }}
              width={'100%'}
              padding={'20px'}
            >
              <Text fontSize="lg" color={'black'}>
                Get My Fair Cash Offer
              </Text>
            </Button>
          </GridItem>
        </Grid>
        <Stack spacing={'3'}>
          <Text textAlign={'center'}>
            <Text as="b">Or Give Us A Call Now At: (541) 236-3095</Text>
          </Text>
          <Text>
            Have you <Text as="b">found yourself in a tough spot lately</Text>?
            We buy houses from people who are behind on payments, inherited a
            house, need to relocate, are facing foreclosure, and many other
            reasons. So you can sell my house fast simply by contacting us.
          </Text>
          <Text>
            Yes,{' '}
            <Text as="b">
              we buy houses and mobile homes in{' '}
              <Button variant="linkPrimary">Oregon</Button> for a fair price
            </Text>
            . We understand that you may have run into some tough struggles and
            need to sell a house fast. We try our best to give people a fair
            offer for their property.
          </Text>
          <Text>
            If your property has become a burden, then you can sell it without
            the long wait time and expense of selling it the traditional way.
            Let us know about the property and we’ll give you a fair all-cash
            offer. We can take some of the burdens off your shoulders.{' '}
            <Text as="b">Give us a call today at (541) 236-3095.</Text>
          </Text>
          <Text color={'rgba(0,0,0,0.5)'}>
            <Text as="em">
              <Text as="b">
                We buy houses and manufactured homes anywhere in Oregon!
              </Text>{' '}
              If you’re thinking: I need to sell my house fast, then connect
              with us. We’d love to make you a fair no-obligation no-hassle
              offer. Take it or leave it. You’ve got nothing to lose 🙂
            </Text>
          </Text>
        </Stack>
        <AspectRatio maxW="100%" ratio={2} marginY={'30px'}>
          <iframe
            title="gmap"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD3E-MU47I1VGn-wbyVwbp-Cj9AqKIPnQU&q=Roseburg%2C+Oregon&zoom=14"
            allowFullScreen
          />
        </AspectRatio>
        <Stack>
          <Text>
            <Button variant={'linkPrimary'}>CLICK HERE</Button> to visit our
            Facebook page.
          </Text>
          <Text>
            Click on{' '}
            <Button variant={'linkPrimary'}>
              Sell Your House Fast For Cash
            </Button>{' '}
            to learn how we can help you.
          </Text>
        </Stack>

        <Box marginY="50px">
          <Button
            size="xs"
            leftIcon={<FaFacebookF />}
            colorScheme="facebook"
            marginRight={'10px'}
          >
            Share
          </Button>
          <Button size="xs" leftIcon={<FaTwitter />} colorScheme="twitter">
            Tweet
          </Button>
        </Box>
      </Box>
    </>
  );
}
