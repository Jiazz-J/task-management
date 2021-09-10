import { CategoryEntity } from '../entities/category.entity';

export class CreateCategoryDto {
  id: number;

  name: string;

  description: string;

  subCategories?: CategoryEntity[];

  static mapTo(dto: CreateCategoryDto): CategoryEntity {
    return new CategoryEntity({
      id: dto.id,
      description: dto.description,
      name: dto.name,
      children: dto.subCategories
        ? CreateCategoryDto.mapNestedCategories(dto.subCategories)
        : undefined,
    });
  }

  static mapNestedCategories(
    categories: CreateCategoryDto[],
  ): CategoryEntity[] {
    return categories.map((category) => CreateCategoryDto.mapTo(category));
  }
}
