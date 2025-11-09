import { PrismaClient } from '../generated/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { phone: '+998901234567' },
    update: {},
    create: {
      name: 'Admin',
      phone: '+998901234567',
      role: 'ADMIN',
      password: hashedPassword,
    },
  });

  console.log('✅ Created admin user:', admin.name);

  // Create sellers
  const seller1 = await prisma.user.upsert({
    where: { phone: '+998901234568' },
    update: {},
    create: {
      name: 'Sotuvchi 1',
      phone: '+998901234568',
      role: 'SELLER',
      password: await bcrypt.hash('seller123', 10),
    },
  });

  const seller2 = await prisma.user.upsert({
    where: { phone: '+998901234569' },
    update: {},
    create: {
      name: 'Sotuvchi 2',
      phone: '+998901234569',
      role: 'SELLER',
      password: await bcrypt.hash('seller123', 10),
    },
  });

  console.log('✅ Created sellers');

  // Create sale points
  const salePoint1 = await prisma.salePoint.upsert({
    where: { id: 'temp-id-1' },
    update: {},
    create: {
      name: 'Toshkent Filiali',
    },
  });

  const salePoint2 = await prisma.salePoint.upsert({
    where: { id: 'temp-id-2' },
    update: {},
    create: {
      name: 'Samarqand Filiali',
    },
  });

  console.log('✅ Created sale points');

  // Create customers
  const customer1 = await prisma.customer.create({
    data: {
      name: 'Abdullayev Jamshid',
      phone: '+998901111111',
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: 'Karimov Sardor',
      phone: '+998902222222',
    },
  });

  console.log('✅ Created customers');

  // Create carpets
  const carpets = await Promise.all([
    prisma.carpet.create({
      data: {
        code: '#001',
        width: 2.0,
        height: 3.0,
        area: 6.0,
        pattern: 'Classic Rose',
        color: 'Qizil',
        material: 'Jun',
        costPrice: 1500000,
        sellPrice: 2000000,
      },
    }),
    prisma.carpet.create({
      data: {
        code: '#002',
        width: 1.5,
        height: 2.5,
        area: 3.75,
        pattern: 'Oriental',
        color: 'Ko\'k',
        material: 'Ipak',
        costPrice: 2000000,
        sellPrice: 2800000,
      },
    }),
    prisma.carpet.create({
      data: {
        code: '#003',
        width: 3.0,
        height: 4.0,
        area: 12.0,
        pattern: 'Modern',
        color: 'Yashil',
        material: 'Sintetik',
        costPrice: 800000,
        sellPrice: 1200000,
      },
    }),
    prisma.carpet.create({
      data: {
        code: '#004',
        width: 2.5,
        height: 3.5,
        area: 8.75,
        pattern: 'Persian',
        color: 'Sariq',
        material: 'Jun va Ipak',
        costPrice: 3000000,
        sellPrice: 4000000,
      },
    }),
    prisma.carpet.create({
      data: {
        code: '#005',
        width: 1.8,
        height: 2.8,
        area: 5.04,
        pattern: 'Geometric',
        color: 'Jigarrang',
        material: 'Jun',
        costPrice: 1200000,
        sellPrice: 1600000,
      },
    }),
  ]);

  console.log(`✅ Created ${carpets.length} carpets`);

  console.log('🎉 Seed completed successfully!');
  console.log('\n📝 Login credentials:');
  console.log('Admin - Phone: +998901234567, Password: admin123');
  console.log('Seller 1 - Phone: +998901234568, Password: seller123');
  console.log('Seller 2 - Phone: +998901234569, Password: seller123');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
